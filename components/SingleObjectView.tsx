import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ObjectWillhave {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
const SingleObjectView: React.FC<{ randomObject: ObjectWillhave }> = (
	props
) => {
	return (
		<View style={styles.view_main} key={props.randomObject.id}>
			<Text style={styles.text_main}>{props.randomObject.title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	view_main: {
		borderWidth: 4,
		borderColor: "black",
		margin: 5,
		borderRadius: 10,
	},
	text_main: {
		color: "black",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
	},
});
export default SingleObjectView;
