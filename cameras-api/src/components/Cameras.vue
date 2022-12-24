<template>
	<div>
		<LandingPage />
		<div class="cards container">
			<ul class="card" v-for="camera in cameras" :key="camera.cameraId">
				<li class="info">
					<router-link
						:to="{
							name: 'SingleCamera',
							params: { cameraId: camera.cameraId },
						}"
					>
						camera name : {{ camera.name }}
					</router-link>
				</li>
			</ul>
		</div>
		<Footer />
	</div>
</template>

<script>
import axios from "axios";
import { credentialsKey } from "../utils/constants.js";
import Footer from "./Footer.vue";
import LandingPage from "./LandingPage.vue";
export default {
	components: { LandingPage, Footer },
	data() {
		return {
			code: "",
			cameras: null,
			credentials: null,
			login:
				"https://rest.cameramanager.com/oauth/authorize?scope=write&client_id=dev_test&response_type=code&redirect_uri=http://localhost:8080",
		};
	},

	async mounted() {
		const credentials = JSON.parse(
			localStorage.getItem(credentialsKey) ?? null
		);

		if (credentials) {
			this.credentials = credentials;

			/**
			 * I don't know if the `expires_in` value can be used to check if the token is
			 * expired because it's not jwt and there's not documentation on how to calculate it manually.
			 */
			const response = await this.getCameras(credentials);

			if (response.status === 200) {
				this.cameras = response.data;
			} else {
				if (credentials.refresh_token) {
					this.getAccessTokenFromRefreshToken(credentials.refresh_token);
				} else {
					this.getQueryCode();
				}
			}
		} else {
			this.getQueryCode();
		}
	},

	methods: {
		getCameras(credentials) {
			return axios({
				method: "GET",
				url: `https://rest.cameramanager.com/rest/v2.4/cameras`,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `${credentials.token_type} ${credentials.access_token}`,
				},
			}).then((response) => {
				this.cameras = response.data;
				return response;
			});
		},
		getQueryCode() {
			if (window.location.search.indexOf("code") > -1) {
				let dl = new URL(document.location),
					searchParams = dl.searchParams;
				this.code = searchParams.get("code");

				this.getAccessToken();
			} else {
				window.location.href = this.login;
			}
		},
		getAccessToken() {
			axios({
				method: "GET",
				url: `http://localhost:9000/login`,
				params: {
					code: this.code,
				},
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization:
						"Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o=",
				},
			})
				.then(async ({ data }) => {
					if (data.status && data.status !== 200) {
						console.error("Something went wrong!");
					} else {
						localStorage.setItem(credentialsKey, JSON.stringify(data));
						this.credentials = data;
						this.getCameras(data);
					}
				})
				.catch((error) => {
					console.log("errors happening" + " " + error);
				});
		},
		getAccessTokenFromRefreshToken(refreshToken) {
			axios({
				method: "GET",
				url: `http://localhost:9000/refresh-token`,
				params: {
					token: refreshToken,
				},
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization:
						"Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o=",
				},
			})
				.then(({ data }) => {
					if (data.status && data.status !== 200) {
						console.error("Something went wrong!");
					} else {
						localStorage.setItem(credentialsKey, JSON.stringify(data));
						this.credentials = data;
						this.getCameras(data);
					}
				})
				.catch((error) => {
					console.log("errors happening" + " " + error);
				});
		},
	},
};
</script>
