import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import Room from "./components/Rooms";
import "remixicon/fonts/remixicon.css";

export default function App() {
	/** data  */
	let quick_actions = [
		{
			name: "ligh",
			icon: "ri-lightbulb-flash-line",
			id: "abl1-sxe",
		},
		{
			name: "fans",
			icon: "ri-lightbulb-flash-line",
			id: "lr1-lfall",
		},
		{
			name: "bulb",
			icon: "ri-equalizer-line",
			id: "lr1-lfall",
		},
		{
			name: "tv",
			icon: "ri-magic-line",
			id: "lr1-lfall",
		},
	];
	let rooms = [
		{
			name: "living room",
			id: "lr1",
			devices: [
				{
					name: "lamp1",
					id: "lr1",
				},
				{
					name: "lamp2",
					id: "lr2",
				},
				{
					name: "lamp3",
					id: "lr3",
				},
				{
					name: "lamp4",
					id: "lr4",
				},
				{
					name: "lamp5",
					id: "lr5",
				},
				{
					name: "lamp6",
					id: "lr6",
				},
				{
					name: "lamp7",
					id: "lr7",
				},
				{
					name: "lamp8",
					id: "lr8",
				},
			],
		},
		{
			name: "kitchen",
			id: "kt1",
			devices: [
				{
					name: "lamp1",
					id: "kt1",
				},
				{
					name: "lamp2",
					id: "kt2",
				},
				{
					name: "lamp3",
					id: "kt3",
				},
				{
					name: "lamp4",
					id: "kt4",
				},
				{
					name: "lamp5",
					id: "kt5",
				},
				{
					name: "lamp6",
					id: "kt6",
				},
			],
		},
		{
			name: "drawing room",
			id: "lr1",
			devices: [
				{
					name: "lamp1",
					id: "dr1",
				},
				{
					name: "lamp2",
					id: "dr2",
				},
				{
					name: "lamp3",
					id: "dr3",
				},
				{
					name: "lamp4",
					id: "dr4",
				},
				{
					name: "lamp5",
					id: "dr5",
				},
				{
					name: "lamp6",
					id: "dr6",
				},
				{
					name: "lamp7",
					id: "dr7",
				},
				{
					name: "lamp8",
					id: "dr8",
				},
			],
		},
	];

	/** */

	return (
		<View style={styles.container}>
			{/**GOOD MORNING SECTION */}
			<View style={styles.morning}>
				<View>
					<i
						class="ri-sun-fill"
						style={{
							fontSize: "50px",
							color: "yellow",
							marginLeft: "0",
						}}
					></i>
				</View>
				<View style={{ marginLeft: "20px" }}>
					<Text style={{ color: "white", fontSize: "30px" }}> good morning</Text>
					<Text style={{ color: "white", fontSize: "20px", marginLeft: "10px" }}>Arvind</Text>
				</View>
			</View>
			{/************************ QUICK ACTION SECTION ******************* */}
			<View style={styles.container1}>
				{quick_actions.map((q) => {
					return (
						<>
							<View>
								<i
									className={q.icon}
									style={{
										color: "white",
										fontSize: "30px",
										backgroundColor: "#000000",
										borderRadius: "50%",
										padding: "10px",
									}}
								></i>
								<Text style={styles.tColor}>{q.name}</Text>
							</View>
						</>
					);
				})}
			</View>
			{/************************** ROOM SECTION ******************************/}
			<View>
				<ScrollView horizontal={true}>
					{rooms.map((room) => {
						return <Room devices={room.devices} roomName={room.name} />;
					})}
				</ScrollView>
			</View>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
	},
	container1: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#282828",
		width: "95%",
		borderRadius: "20px",
		height: "130px",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: "30px",
	},
	tColor: {
		color: "white",
		padding: "10px",
	},
	morning: {
		display: "flex",
		flexDirection: "row",
		width: "95%",
		marginBottom: "30px",
	},
});
