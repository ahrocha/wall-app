import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import Posts from './Posts';

const server = setupServer(
  rest.get('http://localhost:8080/api/post', (req, res, ctx) => {
    return res(ctx.json([{
      "id": 2,
      "created_at": "2022-01-27T13:13:20.000000Z",
      "updated_at": null,
      "post": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "user_id": 5,
      "user": {
        "id": 5,
        "name": "Mahatma Gandhi"
      }
    }, {
      "id": 1,
      "created_at": "2022-01-27T00:11:18.000000Z",
      "updated_at": "2022-01-27T00:11:18.000000Z",
      "post": "A room without books is like a body without a soul.",
      "user_id": 1,
      "user": {
        "id": 1,
        "name": "Andrey Rocha"
      }
    }]))
  }),
  rest.get('http://localhost:8080/sanctum/csrf-cookie', (req, res, ctx) => {
    return res(ctx.json(null));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders posts', async () => {
  render(<Posts />);

  await waitFor(() => {
    const linkElement = screen.getByText(/Gandhi/i);
    expect(linkElement).toBeInTheDocument();
  });

});
