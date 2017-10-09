class GameSerializer < ActiveModel::Serializer
  attributes :id, :initials, :score
end
