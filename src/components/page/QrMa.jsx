import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import Radio from "../Radio";

function QrMa() {
    const [Link, setLink] = useState("");
    const [BG, setBg] = useState("#ffffff");
    const [FG, setFg] = useState("#000000");
    const [logo, setLogo] = useState(null);
    const [backLogo, setBackLogo] = useState(false);
    const [qrStyle, setQrStyle] = useState("squares");
    const [eyeRadius, setEyeRadius] = useState(0);

    const handleRadioChange = (value) => {
        setQrStyle(value);
    };
    const handleEyeRadius = (value) => {
        setEyeRadius(value);
    };

    return (
        <div className="text-retro flex w-full lg:flex-row lg:gap-0 gap-20 flex-col justify-between mt-20 lg:px-40 px-0">
            <div className="lg:w-2/4 w-full flex flex-col">
                <h1 className="text-4xl">QR-MAKER</h1>
                <div className="input mt-5 flex flex-col gap-5">
                    <div className="link">
                        <h1>Input your link</h1>
                        <input
                            type="url"
                            className="w-2/4 text-blacks"
                            onChange={(e) => {
                                setLink(e.target.value);
                            }}
                            name=""
                            id=""
                        />
                    </div>
                    <div className="Bgcolor">
                        <h1>Background color</h1>
                        <div className="flex items-center text-blacks gap-5">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setBg(e.target.value);
                                }}
                                value={BG}
                            />
                            <input
                                type="color"
                                onChange={(e) => {
                                    setBg(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="Fgcolor">
                        <h1>Foreground color</h1>
                        <div className="flex items-center text-blacks gap-5">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setFg(e.target.value);
                                }}
                                value={FG}
                            />
                            <input
                                type="color"
                                onChange={(e) => {
                                    setFg(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="logo">
                        <h1>Input your logo link</h1>
                        <input
                            className="w-2/4 text-blacks"
                            onChange={(e) => {
                                setLogo(e.target.value);
                            }}
                        />
                        <input
                            type="file"
                            className="w-2/4 text-blacks"
                            onChange={(e) => {
                                setLogo(e.target.value);
                            }}
                            name=""
                            id=""
                        />
                        <div className="flex items-center gap-5">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                onClick={(e) => setBackLogo(!backLogo)}
                            />
                            <div className="">remove background</div>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div className="style">
                            <h1>Choose your style</h1>
                            <div className="choose flex items-start flex-col gap-5 mt-5">
                                <div className="flex gap-5">
                                    <Radio
                                        name={"qrStyle"}
                                        value={"squares"}
                                        checked={qrStyle === "squares"}
                                        onChange={handleRadioChange}
                                    />
                                    <div className="w-5 h-5 bg-retro"></div>
                                </div>
                                <div className="flex gap-5">
                                    <Radio
                                        name={"qrStyle"}
                                        value={"dots"}
                                        checked={qrStyle === "dots"}
                                        onChange={handleRadioChange}
                                    />
                                    <div className="w-5 h-5 rounded-full bg-retro"></div>
                                </div>
                                <div className="flex gap-5">
                                    <Radio
                                        name={"qrStyle"}
                                        value={"fluid"}
                                        checked={qrStyle === "fluid"}
                                        onChange={handleRadioChange}
                                    />
                                    <div className="w-5 rounded-md h-5 bg-retro"></div>
                                </div>
                            </div>
                        </div>
                        <div className="styles">
                            <h1>Choose your style</h1>
                            <div className="choose flex items-start flex-col gap-5 mt-5">
                                <div className="flex gap-5">
                                    <Radio
                                        name={"Eye"}
                                        value={0}
                                        checked={eyeRadius === 0}
                                        onChange={handleEyeRadius}
                                    />
                                    <div className="w-5 h-5 bg-retro"></div>
                                </div>
                                <div className="flex gap-5">
                                    <Radio
                                        name={"Eye"}
                                        value={30}
                                        checked={eyeRadius === 30}
                                        onChange={handleEyeRadius}
                                    />
                                    <div className="w-5 h-5 rounded-full bg-retro"></div>
                                </div>
                                <div className="flex gap-5">
                                    <Radio
                                        name={"Eye"}
                                        value={50}
                                        checked={eyeRadius === 50}
                                        onChange={handleEyeRadius}
                                    />
                                    <div className="w-5 rounded-md h-5 bg-retro"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:items-start lg:w-2/5 mb-20 items-center w-full">
                <div className="p-10 flex justify-center items-start bg-[rgba(169,29,58,0.5)]">
                    <QRCode
                        value={Link}
                        size={300}
                        bgColor={BG}
                        fgColor={FG}
                        logoImage={`${logo}`}
                        logoWidth={80}
                        logoPadding={2}
                        qrStyle={qrStyle}
                        eyeRadius={eyeRadius} // Example for eyeRadius
                        removeQrCodeBehindLogo={backLogo}
                        download={"png"}
                    />
                </div>
            </div>
        </div>
    );
}

export default QrMa;
