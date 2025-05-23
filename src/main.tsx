import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CodeContextProvider } from "./context/CodeContext.tsx";
import { SocketContextProvider } from "./context/SocketContext.tsx";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SocketContextProvider>
			<CodeContextProvider>
				<App />
			</CodeContextProvider>
		</SocketContextProvider>
	</StrictMode>
);
