it('Test mocking of a gzip response', async () => {

  const result = await fetch('https://postman-echo.com/gzip')
  const payload = await result.json()
  expect(payload.gzipped).toBeTruthy()
})