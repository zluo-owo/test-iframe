# test-iframe
test repo for iframe

The testcase in this repo will trigger the Safari security popup window.


The issue is that afterwards, there is no way we can use playwright commands to handle the popup window.

1. run `python3 -m http.server` to start the web sever used for testing.
2. set device to `Safari`
3. run this test `/tests/example.spec.ts`
