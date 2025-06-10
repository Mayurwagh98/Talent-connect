const mongoose = require("mongoose");

const jobSeekerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    headline: {
      type: String,
      maxlength: 100,
    },
    bio: {
      type: String,
      maxlength: 2000,
    },
    skills: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        level: {
          type: String,
          enum: ["beginner", "intermediate", "advanced", "expert"],
          default: "intermediate",
        },
      },
    ],
    experience: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: Date,
        current: {
          type: Boolean,
          default: false,
        },
        description: String,
      },
    ],
    education: [
      {
        degree: String,
        institution: {
          type: String,
          required: true,
        },
        fieldOfStudy: String,
        year: Number,
      },
    ],
    location: String,
    remotePreference: {
      type: String,
      enum: ["remote", "hybrid", "onsite", "flexible"],
      default: "flexible",
    },
    jobTypePreference: {
      type: String,
      enum: ["full-time", "part-time", "contract", "freelance"],
      default: "full-time",
    },
    disabilityStatus: {
      type: String,
      enum: ["none", "physical", "sensory", "cognitive", "other"],
      default: "none",
    },
    veteranStatus: {
      type: Boolean,
      default: false,
    },
    careerBreak: {
      type: Boolean,
      default: false,
    },
    resumeUrl: String,
    profilePictureUrl: String,
    socialLinks: {
      linkedIn: String,
      github: String,
      portfolio: String,
    },
    availability: {
      type: String,
      enum: ["immediately", "1-2 weeks", "1-3 months", "flexible"],
      default: "flexible",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobSeekerProfile", jobSeekerProfileSchema);
