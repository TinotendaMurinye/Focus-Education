import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/sb-admin-2.css";
import Sidebar from "./Dash_components/Sidebar";
import Topbar from "./Dash_components/TopBar";

const CreateSubjectProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://picsum.photos/200/200?random=1"
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    profession: "Teacher",
    company: "",
    Instagram: "",
    facebook: "",
    twitter: "",
    skills: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Profile Created:", formData);
  };

  return (
    <div className="profile-page-container" style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="main-content"
        style={{ flex: 1, padding: "2rem", backgroundColor: "#f8f9fc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-header">
            <h1 className="h3 mb-4 text-gray-800">Create Teacher Profile</h1>
          </div>

          <div className="row">
            {/* Profile Image Section */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Profile Picture
                  </h6>
                </div>
                <div className="card-body text-center">
                  <div className="profile-image-container position-relative">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="img-profile rounded-circle mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="image-upload-overlay">
                      <label htmlFor="profile-image-upload" className="mb-0">
                        <FaCamera className="camera-icon" />
                        <input
                          id="profile-image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                  <h4 className="mb-1">{`${formData.firstName} ${formData.lastName}`}</h4>
                  <p className="text-muted">{formData.profession}</p>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Personal Information
                  </h6>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <FaUser className="mr-2" /> First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <FaUser className="mr-2" /> Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <FaEnvelope className="mr-2" /> Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            <FaPhone className="mr-2" /> Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>
                        <FaMapMarkerAlt className="mr-2" /> Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Bio</label>
                      <textarea
                        className="form-control"
                        name="bio"
                        rows="3"
                        value={formData.bio}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Professional Information */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Professional Information
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Company</label>
                              <input
                                type="text"
                                className="form-control"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Social Links
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label>
                            <FaInstagram className="mr-2" /> Instagram
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="Instagram"
                            value={formData.Instagram}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            <FaFacebook className="mr-2" /> Facebook
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            <FaTwitter className="mr-2" /> Twitter
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-success btn-lg">
                        Create Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateSubjectProfile;