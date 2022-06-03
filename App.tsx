import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SingleObjectView from "./components/SingleObjectView";

export default function App() {
	const [randomData, setRandomdata] = useState([]);
	function Fetching() {
		console.log("Begin Fetching");
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => setRandomdata(json));
	}
	useEffect(() => {
		Fetching();
	}, []);

	return (
		<View style={styles.Main_view_outter}>
			<Text>Press Me</Text>
			<ScrollView>
				{randomData.map((randomObject) => (
					<SingleObjectView randomObject={randomObject} />
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	Main_view_outter: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		margin: 30,
	},
});
