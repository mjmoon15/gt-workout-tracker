const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter exercise type.",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter exercise name.",
        },
        duration: {
          type: Number,
          required: "Enter exercise duration.",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  const totalDuration = this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return totalDuration;
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
