class GamesController < ApplicationController

  def index
    @games = Game.all.order(score: :desc, initials: :asc)
    render json: @games
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render json: @game, status: 201
    end
  end

  def update
    @game = Game.find(params[:id])
    @game.likes +=1
    @game.save
    render json: @game
  end

  

  private
    def game_params
      params.require(:game).permit(:initials, :score, :likes)
    end

end
