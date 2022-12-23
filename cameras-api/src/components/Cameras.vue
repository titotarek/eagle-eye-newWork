<template>
	<div>
		<header className="heder">
			<h1>Eagle Eye Networks Vue.Js Developer Assessment</h1>
		</header>

		<Header />

		<div class="cards container">
			<ul class="card info">
				<li>
					<!-- <router-link
						:to="{
							name: 'SingleCamera',
							params: { cameraId: camera.cameraId },
						}"
					>
						<span>camera name : {{ camera.name }}</span>
					</router-link> -->
				</li>
			</ul>
		</div>
		<Footer />
	</div>
</template>

<script>
import axios from "axios";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
const accessTokenKey = "access-token";

export default {
	components: { Header, Footer },
	data() {
		return {
			code: "",
			cameras: null,
			credentials: null,
			login:
				"https://rest.cameramanager.com/oauth/authorize?scope=write&client_id=dev_test&response_type=code&redirect_uri=http://localhost:8080",
		};
	},

	mounted() {
		let credentials = JSON.parse(localStorage.getItem(accessTokenKey) ?? null);

		if (credentials) {
			this.credentials = credentials;

			/**
			 * I don't know if the `expires_in` value can be used to check if the token is
			 * expired because it's not jwt and there's not documentation on how to calculate it manually.
			 */
			const response = this.getCameras();
			if (!response || response.status === 401) {
				if (credentials.refresh_token) {
					this.getAccessTokenFromRefreshToken(credentials.refresh_token);
				} else {
					this.getQueryCode();
				}
			}

			if (response.status === 200) {
				this.cameras = response.data;
			}
		} else {
			this.getQueryCode();
		}
	},

	methods: {
		getCameras() {
			try {
				return axios({
					method: "GET",
					url: `https://rest.cameramanager.com/rest/v2.4/cameras`,
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `${this.credentials.token_type} ${this.credentials.access_token}`,
					},
				}).then((data) => {
					console.log();
				});
			} catch (err) {
				console.error(err);
			}
		},
		getQueryCode() {
			if (window.location.search.indexOf("code") > -1) {
				let dl = new URL(document.location),
					searchParams = dl.searchParams;
				this.code = searchParams.get("code");

				console.log(this.code);
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
				.then(({ data }) => {
					if (data.status && data.status !== 200) {
						console.error("Something went wrong!");
					} else {
						localStorage.setItem(accessTokenKey, JSON.stringify(data));
						this.credentials = data;
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
						localStorage.setItem(accessTokenKey, JSON.stringify(response.data));
						this.credentials = data;
						this.getCameras();
					}
				})
				.catch((error) => {
					console.log("errors happening" + " " + error);
				});
		},
	},
};
</script>
