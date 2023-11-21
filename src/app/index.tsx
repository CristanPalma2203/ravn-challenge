import { toast, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles";
import { theme } from "../theme";
import { Navigation } from "../navigation/Navigation";
import { apolloClient } from "../config/apolloConfig";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navigation />
				<ToastContainer
					theme="dark"
					newestOnTop
					closeOnClick
					pauseOnFocusLoss
					pauseOnHover
					position={toast.POSITION.BOTTOM_RIGHT}
				/>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export { App };
