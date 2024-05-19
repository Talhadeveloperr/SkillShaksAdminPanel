import React, { useState } from 'react';

function AddCourse() {
  const [authorName, setAuthorName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [courseImagePreview, setCourseImagePreview] = useState('');
  const [authorImage, setAuthorImage] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState('');

  const handleAddCourse = () => {
    // Logic to add course (e.g., send data to backend)
    console.log('Author Name:', authorName);
    console.log('Course Name:', courseName);
    console.log('Course Category:', courseCategory);
    console.log('Course Level:', courseLevel);
    console.log('Course Image:', courseImage);
    console.log('Author Image:', authorImage);
    // Reset form fields after submission
    setAuthorName('');
    setCourseName('');
    setCourseCategory('');
    setCourseLevel('');
    setCourseImage(null);
    setCourseImagePreview('');
    setAuthorImage(null);
    setAuthorImagePreview('');
  };

  const handleCourseImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseImage(file);
      setCourseImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuthorImage(file);
      setAuthorImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>
      <form onSubmit={handleAddCourse}>
        <div className="mb-4">
          <label htmlFor="authorName" className="block text-sm font-medium">Author Name:</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courseName" className="block text-sm font-medium">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courseCategory" className="block text-sm font-medium">Course Category:</label>
          <select
            id="courseCategory"
            value={courseCategory}
            onChange={(e) => setCourseCategory(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select category</option>
            <option value="web development">Web Development</option>
            <option value="app development">App Development</option>
            <option value="machine learning">Machine Learning</option>
            <option value="data science">Data Science</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="courseLevel" className="block text-sm font-medium">Course Level:</label>
          <select
            id="courseLevel"
            value={courseLevel}
            onChange={(e) => setCourseLevel(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="courseImage" className="block text-sm font-medium">Course Image:</label>
          <input
            type="file"
            id="courseImage"
            onChange={handleCourseImageChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {courseImagePreview && (
            <img src={courseImagePreview} alt="Course Preview" className="mt-2 rounded-md w-1/3 max-h-32 object-contain" style={{ maxWidth: '50%' }} />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="authorImage" className="block text-sm font-medium">Author Image:</label>
          <input
            type="file"
            id="authorImage"
            onChange={handleAuthorImageChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
    {authorImagePreview && (
            <div className="mt-2 rounded-full overflow-hidden border-2 border-blue-500 w-20 h-20">
            <img src={authorImagePreview} alt="Author Preview" className="w-full h-full object-top object-cover" />
          </div>
          
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
