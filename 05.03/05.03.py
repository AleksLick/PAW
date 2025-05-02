from typing import List
import os

class Course:
    def __init__(self, name: str):
        self.name = name

class Student:
    def __init__(self, student_id: int, first_name: str, last_name: str, age: int):
        self.student_id = student_id
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.courses: List[Course] = []
    
    def add_course(self, course: Course):
        self.courses.append(course)
    
    def __str__(self):
        course_names = [course.name for course in self.courses]
        return f"{self.first_name} {self.last_name} ({self.age} lat): {', '.join(course_names)}"
    
    def generate_course_file(self):
        filename = f"{self.first_name.lower()}_{self.last_name.lower()}.txt"
        with open(filename, 'w', encoding='utf-8') as file:
            file.write("Kursy:\n")
            for course in self.courses:
                file.write(f"- {course.name},\n")

def load_students(file_path: str) -> List[Student]:
    students = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            parts = line.strip().split(',')
            if len(parts) == 4:
                student_id = int(parts[0])
                first_name = parts[1]
                last_name = parts[2]
                age = int(parts[3])
                students.append(Student(student_id, first_name, last_name, age))
    return students

def load_courses(file_path: str, students: List[Student]):
    student_dict = {student.student_id: student for student in students}
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            parts = line.strip().split(',')
            if len(parts) == 2:
                student_id = int(parts[0])
                course_name = parts[1]
                if student_id in student_dict:
                    student_dict[student_id].add_course(Course(course_name))

def main():
    students = load_students('students.txt')
    load_courses('courses.txt', students)
    
    for student in students:
        print(student)
    
    for student in students:
        student.generate_course_file()

if __name__ == "__main__":
    main()
