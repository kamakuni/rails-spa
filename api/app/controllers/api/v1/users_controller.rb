class Api::V1::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(name: params[:name],email: params[:email],password: params[:password])
    if user.save then
      render json: {:status => "SUCCESS"}
    else
      render status:500, json: {:status => "ERROR"}
    end
  end
end
