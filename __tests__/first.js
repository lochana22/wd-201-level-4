// "^29.3.1" for jest in package.json
// eslint-disable-next-line no-undef
describe("first test suite", () => {
  // eslint-disable-next-line no-undef
  test("first case", () => {
    // eslint-disable-next-line no-undef
    expect(true).toBe(true);
  });
});

/*const { describe } = require('eslint/lib/rule-tester/rule-tester')
const todoList = require('../todo')
const {all, markAsComplete, add } = todoList()
describe('Todolist Test Suite', () => {
    beforeAll(() => {
    add(
            {
                title: 'Test todo',
                completed:'false',
                dueDate: new Date().toLocaleDateString("en-IN")
                
            }
        )
    })
    test("Should add new todo" ,() => {
        const todoItemsCount = all.length

        expect(all.length).toBe(0);
        add(
            {
                title:"Test todo",
                completed:"false",
                dueDate: new Date().toLocaleDateString('en-IN')
                
            }
        )
        expect(all.length).toBe(todoItemsCount + 1)
    })
    test("should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })
})
*/

//package.json
/*{
  "name": "hello-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "prepare": "husky install"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lochana22/wd-hello-node.git"
  },
  "author": "Lochana Senapati <lochana.senapati5@gmail.com>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/lochana22/wd-hello-node/issues"
  },
  "homepage": "https://github.com/lochana22/wd-hello-node#readme",
  "dependencies": {
    "minimist": "^1.2.7"
  },
  "devDependencies": {
    "eslint": "^8.28.0",
    "husky": "^8.0.2",
    "jest": "true",
    "lint-staged": "^13.0.3",
    "prettier": "^2.7.1"
  }
}*/
