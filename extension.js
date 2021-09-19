({
    name: "Ultrasonic", // Category Name
    description: "Attach your HC-SR04 to custom Pin",
    author: "javanesse.net",
    category: "Sensors",
    version: "1.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="ultrasonic_read">
                    <field name="trig">22</field>
                    <field name="echo">23</field>
                </block>
            `
        }
    ]
});
