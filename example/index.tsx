import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {FullColorPicker} from "../dist";
import {Form} from "antd";
import {Color} from "antd/es/color-picker";

const App = () => {

    const [form] = Form.useForm()

    return (
        <div>
            <Form form={form} onFinish={(value) => {
                console.log(value.color.toHexString());
            }}>
                <Form.Item label={`Color`} name="color">
                    <FullColorPicker/>
                </Form.Item>
            </Form>

            <button onClick={form.submit}>提交</button>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
