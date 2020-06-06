import React, {Component} from "react";
import ReactDOM from "react-dom";


class LoadingData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            progressBarWidth: 0
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            let progressBarWidth = this.state.progressBarWidth
            progressBarWidth += 1

            this.setState({
                progressBarWidth
            })

            if (progressBarWidth == 100) {
                clearInterval(this.interval)
            }
        }, 100)
    }

    render() {
        return (
            <>
                {
                    this.state.progressBarWidth == 100 ?
                        <h1>Dane załadowane</h1>
                        :
                        <div style={{
                            width: 300,
                            height: 50,
                            borderWidth: 2,
                            borderColor: "black"
                        }}>
                            <div style={{
                                width: this.state.progressBarWidth + "%",
                                backgroundColor: "red",
                                height: "100%"
                            }}></div>
                        </div>
                }
            </>

        )
    }
}



function App() {
    return (
        <>
            <LoadingData />
        </>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
);


