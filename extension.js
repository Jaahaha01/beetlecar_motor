({
    name: "Ultrasonic Custom Pin", // Category Name
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
				    <value name="trig">
                        <shadow type="math_number">
                            <field name="NUM">22</field>
                        </shadow>
                    </value>
					<value name="echo">
                        <shadow type="math_number">
                            <field name="NUM">23</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
