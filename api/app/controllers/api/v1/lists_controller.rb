class Api::V1::ListsController < ApplicationController
  def index
    render json: List.all
  end

  def create
    render json: {}
  end
end
