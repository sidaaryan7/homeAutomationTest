import { View, StyleSheet, Text } from "react-native-web";
// import "remixicon/fonts/remixicon.css";

const Subroom = ({ deviceName }) => {
	return (
		<>
			<View style={styles.subRoom}>
				<View style={styles.s1}>
					<i class="ri-lightbulb-line" style={{ backgroundColor: "#282828", color: "white", borderRadius: "50%" }}></i>
				</View>
				<View style={styles.s2}>
					<Text style={styles.textCommon}>{deviceName}</Text>
					<Text style={styles.textCommon}>hours</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	subRoom: {
		height: "50px",
		width: "100px",
		borderRadius: "20px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000",
	},
	s1: {
		marginRight: "5px",
	},
	s2: {
		marginLeft: "5px",
	},

	textCommon: {
		color: "white",
	},
});

export default Subroom;
