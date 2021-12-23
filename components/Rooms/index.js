import { Card, Button, Icon, Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import Subroom from "../Subroom";
Subroom;
const Room = ({ devices, roomName }) => {
	return (
		<Card containerStyle={{ backgroundColor: "#282828", borderRadius: "10px", border: "none" }}>
			<View style={Styles.container}>
				<View style={Styles.subContainer1}>
					<View>
						<Text style={{ color: "white", fontSize: "20px" }}>{roomName}</Text>
						<Text style={{ color: "white", fontSize: "10px" }}>7 devices</Text>
					</View>
					<View>
						<Button
							title={"edit"}
							buttonStyle={{
								borderRadius: "30px",
								width: "80px",
								height: "30px",
								backgroundColor: "#000000",
							}}
						></Button>
					</View>
				</View>
				<View style={Styles.subContainer2}>
					<View
						style={{
							padding: "10px",
						}}
					>
						{devices.map((d, index) => {
							if (index < 4) {
								return (
									<View style={Styles.mg}>
										<Subroom deviceName={d.name} />
									</View>
								);
							}
						})}
					</View>
					<View
						style={{
							padding: "10px",
						}}
					>
						{devices.map((d, index) => {
							if (index >= 4) {
								return (
									<View style={Styles.mg}>
										<Subroom deviceName={d.name} />
									</View>
								);
							}
						})}
					</View>
				</View>
			</View>
		</Card>
	);
};

const Styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
	},
	subContainer1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	subContainer2: {
		display: "flex",
		flexDirection: "row",
		padding: "10px",
	},
	mg: {
		marginBottom: "5px",
	},
});

export default Room;
