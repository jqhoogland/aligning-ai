import * as d3 from 'd3';
import { createSignal, createEffect, For } from "solid-js";
import { spring } from 'motion';
import { Motion } from "@motionone/solid";
import clsx from "clsx";
import katex from "katex";

const D4_CAYLEY_TABLE = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 0, 6, 7, 5, 4],
    [2, 3, 0, 1, 5, 4, 7, 6],
    [3, 0, 1, 2, 7, 6, 4, 5],
    [4, 7, 5, 6, 0, 2, 3, 1],
    [5, 6, 4, 7, 2, 0, 1, 3],
    [6, 4, 7, 5, 1, 3, 0, 2],
    [7, 5, 6, 4, 3, 1, 2, 0],
]


export default function SymmetriesD4() {
    let [state, setState] = createSignal(0);
    const stateNames = ['e', 'r', 'r^2', 'r^3', 't_x', 't_y', 't_{AC}', 't_{BD}'];
    const labels = stateNames.map((name, i) => katex.renderToString(name));

    const updateState = (newState: number) => () => {
        setState(newState);
    };

    const applyState = (i: number) => () => {
        setState(D4_CAYLEY_TABLE[state()][i]);
    };


    const rotationAxis = () => ({
        [state()]: [0, 0, 0],
        4: [0, 1, 0],
        5: [1, 0, 0],
        6: [1, 1, 0],
        7: [1, -1, 0],
    }[state()]);

    return (
        <div class="pt-4">
            <div class="px-16 flex justify-center">
                <Motion.div
                    animate={{
                        rotate: state() < 4 ? 90 * state() : 0,
                        transform: `rotate3d(${rotationAxis()[0]}, ${rotationAxis()[1]}, ${rotationAxis()[2]}, ${state() >= 4 ? 180 : 0}deg)`,
                    }}
                    transition={{
                        easing: spring()
                    }}
                    class="w-48 h-48 bg-orange-300 rounded-lg"
                >
                    {/* Label the vertices */}
                    <div class="absolute top-0 left-0 w-8 h-8 flex items-center justify-center text-xs text-gray-700">
                        <span class="transform -rotate-45">A</span>
                    </div>
                    <div class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-xs text-gray-700">
                        <span class="transform -rotate-45">D</span>
                    </div>
                    <div class="absolute bottom-0 left-0 w-8 h-8 flex items-center justify-center text-xs text-gray-700">
                        <span class="transform -rotate-45">B</span>
                    </div>
                    <div class="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center text-xs text-gray-700">
                        <span class="transform -rotate-45">C</span>
                    </div>
                </Motion.div>
            </div>


            {/* Cayley Table of D4 */}
            <div class="overflow-x-auto -mx-2">
                <table class="text-sm mx-2">
                    <thead>
                        <tr >
                            <th class="p-2" />
                            <For each={labels}>
                                {((label, i) => (
                                    <th onClick={applyState(i())} class={"btn btn-sm text-center rounded-sm hover:cursor-pointer"} innerHTML={label} />
                                ))}
                            </For>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={labels}>
                            {(rowLabel, i) => (
                                <tr>
                                    <th scope="row" innerHTML={rowLabel} onClick={updateState(i())} class={clsx("btn btn-sm text-center rounded-sm hover:cursor-pointer", state() === i() && "brightness-75")} />
                                    <For each={labels}>
                                        {(label, j) => (
                                            <td innerHTML={labels[D4_CAYLEY_TABLE[i()][j()]]}
                                                class={clsx("text-center", state() === j() && "brightness-75")} />
                                        )}
                                    </For>
                                </tr>
                            )}
                        </For>
                    </tbody>
                </table>
            </div>
        </div>
    );
}