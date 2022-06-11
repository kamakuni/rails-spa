class Api::V1::ListsController < ApplicationController
  def index
    response json: Lists.all
  end

  def create
  end
end
