# nock-gzip-test-case

## How to reproduce

Run the test
```shell
npm test
```

If you delete the file [Test.spec.json](src/nockFixtures/Test.spec.json) and run the test again, the file is recreated and the test is successful exactly once.  