const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmployerProfile",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    requirements: [
      {
        type: String,
        required: true,
      },
    ],
    skillsRequired: [
      {
        type: String,
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    remoteOption: {
      type: String,
      enum: ["remote", "hybrid", "onsite", "flexible"],
      required: true,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "freelance"],
      required: true,
    },
    salaryRange: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: "USD",
      },
      period: {
        type: String,
        enum: ["hourly", "monthly", "yearly"],
        default: "yearly",
      },
      isPublic: {
        type: Boolean,
        default: true,
      },
    },
    benefits: [String],
    disabilityFriendly: {
      type: Boolean,
      default: false,
    },
    veteranFriendly: {
      type: Boolean,
      default: false,
    },
    careerBreakFriendly: {
      type: Boolean,
      default: false,
    },
    flexibleSchedule: {
      type: Boolean,
      default: false,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "closed", "draft"],
      default: "active",
    },
    applicationDeadline: Date,
    applicationProcess: {
      type: String,
      enum: ["quick-apply", "external-link", "custom-form"],
      default: "quick-apply",
    },
    applicationUrl: String,
    views: {
      type: Number,
      default: 0,
    },
    applicationsCount: {
      type: Number,
      default: 0,
    },
    categories: [String],
    experienceLevel: {
      type: String,
      enum: ["entry", "mid", "senior", "executive"],
    },
  },
  { timestamps: true }
);

// Indexes for better query performance
jobPostingSchema.index({
  title: "text",
  description: "text",
  skillsRequired: "text",
});
jobPostingSchema.index({ employerId: 1, status: 1 });
jobPostingSchema.index({ expiresAt: 1 });

module.exports = mongoose.model("JobPosting", jobPostingSchema);
