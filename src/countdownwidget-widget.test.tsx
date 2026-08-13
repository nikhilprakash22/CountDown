import React from "react"
import {screen, render} from "@testing-library/react"

import {CountdownwidgetWidget} from "./countdownwidget-widget";

describe("CountdownwidgetWidget", () => {
    it("should render the component", () => {
        render(<CountdownwidgetWidget contentLanguage="en_US" message="World" enddate={0} Days={""} messages={""} messagess={""} messagesss={""} language={"en"}/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
