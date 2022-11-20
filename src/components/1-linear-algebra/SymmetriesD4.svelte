<!-- Display the symmetries of D_4 (the dihedral group of order 4) -->
<script lang="ts">
    import * as d3 from 'd3';

    let state = 0;
    const state_names = ['e', 'r_1', 'r_2', 'r_3', 's_1', 's_2', 's_3'];
    
    const orientations = [
        // Identity
        [0, 1, 2, 3],
        // Reflections
        [1, 2, 3, 0],
        [2, 3, 0, 1],
        [3, 0, 1, 2],
        // Rotations
        [3, 0, 1, 2],
        [2, 3, 0, 1],
        [1, 2, 3, 0],
    ];

    let orientation = orientations[state];

    console.log(orientation);

    const updateState = (newState: number) => () => {
        state = newState;
        // orientation = orientations[state];
        console.log("WTF", state);

        const t0 = Date.now();
        const svg = d3.select("#symmetries-d4");

        d3.timer(() => {
            const delta = (Date.now() - t0);
            svg.selectAll("#square").attr("transform", (d) => {
                return "rotate(" + d.phi0 + delta * d.speed/200 + ")";
            })
        });
    };

</script>

{state}

<svg id="symmetries-d4">
    <g id="square">
        <rect x="0" y="0" width="100" height="100" fill="black" />
        <text x="10" y="20" fill="white" font-size="20">{orientation[0]}</text>
        <text x="80" y="20" fill="white" font-size="20">{orientation[1]}</text>
        <text x="80" y="80" fill="white" font-size="20">{orientation[2]}</text>
        <text x="10" y="80" fill="white" font-size="20">{orientation[3]}</text>
    </g>
</svg>

<!-- Draw a button for each of the symmetries -->

<!-- Identity -->
<button on:click={updateState(0)} on:click={() => alert("WTHA?")}>e</button>

<!-- Rotations -->
<button on:click={updateState(1)}>r_1</button>
<button on:click={updateState(2)}>r_2</button>
<button on:click={updateState(3)}>r_3</button>

<!-- Reflections -->
<button on:click={updateState(4)}>s_1</button>
<button on:click={updateState(5)}>s_2</button>
<button on:click={updateState(6)}>s_3</button>
