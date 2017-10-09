class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def create
    raise game_params.inspect
    @game = Game.new(game_params)
    if game.save
      render json: @game, status: 201
    end
  end

  private
    def game_params
      params.require(:game).permit(:initials, :score)
    end

end
