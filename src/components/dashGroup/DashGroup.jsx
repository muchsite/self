import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMainContext } from "../../utils/context";
import LoadingMain from "../loading/LoadnigMain";
import "./group.scss";
const DashGroup = () => {
  const { baseURL, refreshToken } = useMainContext();
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState({});
  const [student, setStudent] = useState({});
  const { groupId } = useParams();
  useEffect(() => {
    const fetchProfiel = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          baseURL + `api/group/?group_id=${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;
        setGroup(data.group);
        setStudent(data.students);
        setLoading(false);
      } catch (error) {
        refreshToken(error, fetchProfiel);
        setLoading(false);
        setLoading(false);
      }
    };
    fetchProfiel();
  }, []);
  console.log(student);
  return (
    <>
      {loading ? (
        <LoadingMain color={"#00f69e"} />
      ) : (
        <>
          <div className="single_group_container">
            <div className="single_grup_content">
              <div className="group_info">
                <img src={group.group_image} alt="" className="group_img" />
                <div className="group_details">
                  <p>
                    Name: <span>{group.name}</span>
                  </p>
                  <p>
                    Type: <span>{group.group_type}</span>
                  </p>
                  <p>
                    Place: <span>{group.place}</span>
                  </p>
                  <p>
                    Description: <span>{group.description}</span>
                  </p>
                </div>
              </div>
              <div className="students">
                <div className="students_header">
                  <p>Email:</p>
                  <p>Image:</p>
                  <p>Profession:</p>
                  <p>Date Of Birth:</p>
                  <p className="gender">Gender:</p>
                </div>
                {student.map((item, index) => {
                  return (
                    <Link
                      className={`student_details ${
                        index % 2 == 0 ? "course_row_light" : "course_row_dark"
                      }`}
                      key={index}
                      to={`student?user_id=${item.id}`}
                    >
                      <p className="student_row">{item.email}</p>
                      <img
                        src={item.profile_image}
                        alt="Profile Image"
                        className="student_row"
                      />
                      <p className="student_row">{item.profession}</p>
                      <p className="student_row">{item.dob}</p>
                      <p className="student_row gender">{item.gender}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashGroup;
