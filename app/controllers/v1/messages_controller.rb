class V1::MessagesController < ApplicationController
  def index
    random_msg = Message.find(Message.pluck(:id).sample)
    render json: { message: random_msg }.to_json
  end
end
