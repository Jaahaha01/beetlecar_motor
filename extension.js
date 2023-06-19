({
    name: "beetlecar_motor", // Category Name
    description: "",
    author: "Phatcharapon",
    category: "Controller",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "stopMotor",
                        {
                            xml: `
                                <block type="Forward">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Backward">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Left">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="Right">
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveAward">
                                    <field name="moveAward">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveBack">
                                    <field name="moveBack">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveLeft">
                                    <field name="moveLeft">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
                        {
                            xml: `
                                <block type="moveRight">
                                    <field name="moveRight">0</field>
                                    <field name="speed">0</field>
                                </block>
                            `
                        },
    ]
});
