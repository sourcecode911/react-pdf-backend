"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplate = void 0;
const BlockFragment_1 = require("./blocks/BlockFragment");
const Padding_1 = require("./blocks/Padding");
const Title_1 = require("./blocks/Title");
exports.defaultTemplate = new BlockFragment_1.BlockFragment({
    items: [
        new Padding_1.Padding({
            metadata: {
                right: 32,
                left: 32,
                bottom: 24
            },
            items: [
                new Title_1.Title({
                    accessor: 'firstNameTitle',
                    metadata: {
                        theme: 'h1',
                        color: 'gray'
                    }
                }),
                new Title_1.Title({
                    accessor: 'firstName',
                    metadata: {
                        theme: 'h1'
                    }
                })
            ]
        }),
        new Padding_1.Padding({
            metadata: {
                right: 32,
                left: 32,
                bottom: 24
            },
            items: [
                new Title_1.Title({
                    accessor: 'lastNameTitle',
                    metadata: {
                        theme: 'h2',
                        color: 'gray'
                    }
                }),
                new Title_1.Title({
                    accessor: 'lastName',
                    metadata: {
                        theme: 'h2'
                    }
                })
            ]
        }),
        new Padding_1.Padding({
            metadata: {
                right: 32,
                left: 32,
                bottom: 24
            },
            items: [
                new Title_1.Title({
                    accessor: 'ageTitle',
                    metadata: {
                        theme: 'h2',
                        color: 'gray'
                    }
                }),
                new Title_1.Title({
                    accessor: 'age',
                    metadata: {
                        color: 'red',
                        theme: 'h2',
                    }
                })
            ]
        })
    ]
});
//# sourceMappingURL=schema.js.map