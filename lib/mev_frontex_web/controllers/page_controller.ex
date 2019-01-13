defmodule MevFrontexWeb.PageController do
  use MevFrontexWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
