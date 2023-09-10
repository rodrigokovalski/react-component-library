import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import replace from 'rollup-plugin-replace';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

import { readFileSync } from "fs";
const packageJson = JSON.parse(readFileSync('package.json', {encoding: 'utf8'}));

export default [
    {
        input: "src/index.ts",
        external: ['react-dom'],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            PeerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'production' )
            })
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    }
];