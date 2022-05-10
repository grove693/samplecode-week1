import * as categoryAPI from "./fakeCategoryService";

const courses = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "React Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471818", name: "FrontEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-06"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "NodeJS Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471814", name: "BackEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-09"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Java Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471814", name: "BackEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-12"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "React Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471818", name: "FrontEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2019-01-10",
    endDate: "2019-01-23"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Go Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471814", name: "BackEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2020-01-03",
    endDate: "2020-01-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "Angular Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471818", name: "FrontEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Azure DevOps Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471820", name: "Cloud" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "VueJS Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471818", name: "FrontEnd" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2022-01-03",
    endDate: "2022-01-03"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    title: "AWS DevOps Accelerator",
    category : { _id: "5b21ca3eeb7f6fbccd471820", name: "Cloud" },
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    startDate: "2018-01-03",
    endDate: "2018-01-03"
  }
];

export function getCourses() {
  return courses;
}

export function getCoursesWithPagination(pageNumber, pageSize) {
  const fromIndex = pageSize * (pageNumber - 1);
  const toIndex = fromIndex + pageSize;

  return courses.slice(fromIndex, toIndex);
}

// export function getCourse(id) {
//   return courses.find(m => m._id === id);
// }

// export function saveCourse(course) {
//   let courseInDB = courses.find(c => c._id === course._id) || {};
//   courseInDB.title = course.title;
//   courseInDB.category = categoryAPI.category.find(c => c._id === course.courseId);
//   courseInDB.description = course.description;
//   courseInDB.startDate = course.startDate;
//   courseInDB.endDate = course.endDate

//   if (!courseInDB._id) {
//     courseInDB._id = Date.now();
//     courses.push(courseInDB);
//   }

//   return courseInDB;
// }

// export function deleteCourse(id) {
//   let courseInDB = courses.find(c => c._id === id);
//   courses.splice(courses.indexOf(courseInDB), 1);
//   return courseInDB;
// }
