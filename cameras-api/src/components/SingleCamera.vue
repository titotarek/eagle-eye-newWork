<template>
	<div class="container">
		<div class="cards">
			<div class="card">
				<div class="info" v-if="camera">
					<p>{{ camera.name }}</p>
					<p>{{ camera.deviceTypeId }}</p>
					<p>{{ camera.ethMacAddress }}</p>
					<p>{{ camera.zoneId }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import { credentialsKey } from "../utils/constants.js";

export default {
	props: ["cameraId"],

	data() {
		return {
			camera: null,
		};
	},

	mounted() {
		const credentials = JSON.parse(
			localStorage.getItem(credentialsKey) ?? null
		);

		axios({
			method: "GET",
			url: `https://rest.cameramanager.com/rest/v2.4/cameras/${this.cameraId}`,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `${credentials.token_type} ${credentials.access_token}`,
			},
		})
			.then((response) => {
				this.camera = response.data;
			})

			.catch((err) => {
				console.log(err);
			});
	},
};
</script>
