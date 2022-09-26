import { rest } from "msw"
import { setupServer } from "msw/lib/node"

describe("test for dashboard", () => {
  const handlers = [
    rest.post("http://localhost:3000/api/v1/lists", async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(
          [
            {
              "id": 69,
              "title": "l1",
              "user_id": 38,
              "created_at": "2022-09-25T01:39:45.152Z",
              "updated_at": "2022-09-25T01:39:45.152Z"
            },
            {
              "id": 70,
              "title": "l2",
              "user_id": 38,
              "created_at": "2022-09-25T01:40:00.215Z",
              "updated_at": "2022-09-25T01:40:00.215Z"
            },
            {
              "id": 71,
              "title": "l3",
              "user_id": 38,
              "created_at": "2022-09-25T01:40:21.426Z",
              "updated_at": "2022-09-25T01:40:21.426Z"
            },
            {
              "id": 72,
              "title": "l4",
              "user_id": 38,
              "created_at": "2022-09-25T01:40:43.730Z",
              "updated_at": "2022-09-25T01:40:43.730Z"
            }
          ]
        )
      )
    }),
    rest.post("http://localhost:3000/api/v1/cards", async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(
          [
            {
              "id": 88,
              "title": "t1",
              "body": "b1",
              "list_id": 69,
              "created_at": "2022-09-25T01:39:54.161Z",
              "updated_at": "2022-09-25T01:39:54.161Z"
            }
          ]
        )
      )
    })
  ]
  const server = setupServer(...handlers)

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  test("", () => {

  })
})