const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPosting",
      required: true,
    },
    jobSeekerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobSeekerProfile",
      required: true,
    },
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployerProfile",
      required: true,
    },
    coverLetter: {
      type: String,
      maxlength: 2000,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "submitted",
        "reviewed",
        "shortlisted",
        "interview",
        "rejected",
        "hired",
      ],
      default: "submitted",
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    notes: [
      {
        author: {
          type: String,
          enum: ["employer", "jobSeeker"],
          required: true,
        },
        content: {
          type: String,
          required: true,
          maxlength: 1000,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    screeningAnswers: [
      {
        question: String,
        answer: String,
      },
    ],
    interviewDates: [Date],
    feedback: {
      employerFeedback: String,
      jobSeekerFeedback: String,
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
    },
  },
  { timestamps: true }
);

// Indexes for better query performance
applicationSchema.index({ jobId: 1, jobSeekerId: 1 });
applicationSchema.index({ employerId: 1, status: 1 });

module.exports = mongoose.model("Application", applicationSchema);
