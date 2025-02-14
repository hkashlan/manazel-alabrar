/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseInstance } from '@prisma/client';
import { PropInformation, WithPropType } from '../utils/type-utils';
import { CourseInstanceGenInfo } from './course-instance.gen-info';
import { Lessons } from '../../json-models';
const name: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.name,
};
const courseId: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.courseId,
};
const courseName: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.courseName,
};
const pathInstanceId: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.pathInstanceId,
};
const pathInstanceName: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.pathInstanceName,
};
const description: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.description,
};
const dateFrom: PropInformation<Date, 'Date'> = {
  basic: CourseInstanceGenInfo.dateFrom,
};
const dateTo: PropInformation<Date, 'Date'> = {
  basic: CourseInstanceGenInfo.dateTo,
};
const bookId: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.bookId,
};
const bookName: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.bookName,
};
const lessons: PropInformation<Lessons, 'Lessons'> = {
  basic: CourseInstanceGenInfo.lessons,
};
const pageFrom: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.pageFrom,
};
const pageTo: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.pageTo,
};
const teacherId: PropInformation<number, 'number'> = {
  basic: CourseInstanceGenInfo.teacherId,
};
const teacherName: PropInformation<string, 'string'> = {
  basic: CourseInstanceGenInfo.teacherName,
};
export const CourseInstancePropInfo: WithPropType<CourseInstance, PropInformation<any, any>> = {
  name: name,
  courseId: courseId,
  courseName: courseName,
  pathInstanceId: pathInstanceId,
  pathInstanceName: pathInstanceName,
  description: description,
  dateFrom: dateFrom,
  dateTo: dateTo,
  bookId: bookId,
  bookName: bookName,
  lessons: lessons,
  pageFrom: pageFrom,
  pageTo: pageTo,
  teacherId: teacherId,
  teacherName: teacherName,
};
