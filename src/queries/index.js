import { gql } from '@apollo/client';

export const GetNotesQuery = gql`
  query {
    Notes {
      id
      Name
      Link
      Clicked
      Lesson {
        Name
      }
      User {
        id
        UserName
        email
      }
      Class{
        id
        ClassName
      }
    }
  }
`;
export const GetLessonQuery = gql`
  query {
    Lessons {
      id
      Name
    }
  }
`;

export const GetMathNotesQuery = gql`
  query {
    Lesson(id: "5ebc68844f741a2df89f7a82") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetEnglishQuery = gql`
  query {
    Lesson(id: "5f19d1366cc3d5f4499175db") {
        Name
        Not {
          id
          Name
          Link
          Lesson{
            Name
          }
          User {
            id
            UserName
            email
          }
          Class{ClassName}
        }
      }
  }
`;
export const GetChemistryQuery = gql`
  query {
    Lesson(id: "5f1c386350bec700948a70b0") {
        Name
        Not {
          id
          Name
          Link
          Lesson{
            Name
          }
          User {
            id
            UserName
            email
          }
          Class{ClassName}
        }
      }
  }
`;

export const GetLiteratureesQuery = gql`
  query {
    Lesson(id: "5ecd57f47a49582a10d12d34") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetBiologyNotesQuery = gql`
  query {
    Lesson(id: "5ebc68894f741a2df89f7a83") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetHistoryNotesQuery = gql`
  query {
    Lesson(id: "5f1e8c9bd506a117b0d83fd3") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetPhilosophyNotesQuery = gql`
  query {
    Lesson(id: "5f1e8c72d506a117b0d83fd0") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetGeographyNotesQuery = gql`
  query {
    Lesson(id: "5f1e8c93d506a117b0d83fd2") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;
export const GetReligionNotesQuery = gql`
  query {
    Lesson(id: "5f1e8c87d506a117b0d83fd1") {
      Name
      Not {
        id
        Name
        Link
        Lesson{
          Name
        }
        User {
          id
          UserName
          email
        }
        Class{
          id
          ClassName
        }
      }
    }
  }
`;

export const GetPhysicsNotesQuery = gql`
  query {
  Lesson(id: "5ebc688f4f741a2df89f7a84") {
    Name
    Not {
      id
      Name
      Link
      Lesson{
        Name
      }
      User {
        id
        UserName
        email
      }
      Class{
        id
        ClassName
      }
    }
  }
}
`;

export const GetClass = gql`
  query {
    Classes{
      id
      ClassName
    }
  }
`;

export const CreateNot = gql`
  mutation(
  $Name: String!
  $Link: String!
  $lessonId: ID!
  $userId: ID!
  $classId: ID!
) {
  createNot(
    data: {
      Name: $Name
      Link: $Link
      lessonId: $lessonId
      userId: $userId
      classId: $classId
    }
  ) {
    Name
  }
}
`;
export const CreateLesson = gql`
  mutation($Name: String!) {
    createLesson(data: { Name: $Name }) {
      Name
    }
  }
`;

export const CreateUser = gql`
  mutation($UserName: String!, $password: String!, $email: String!) {
    createUser(
      data: { UserName: $UserName, password: $password, email: $email }
    ) {
      token
    }
  }
`;

export const SıgınUser = gql`
  mutation($password: String!, $UserName: String!) {
    signIn(data: { password: $password, UserName: $UserName }) {
      token
    }
  }
`;

export const GET_USER = gql`
  query {
    activeUser {
      id
      UserName
      email
      Not {
        id
        Name
        Link
        Lesson {
          Name
        }
        User {
        id
        UserName
        email
        }
        Class{
          id
          ClassName
        }
      }
      Block
      role
      CanDelete
      createdAt
    }
  }
`;

export const CreatePosts = gql`
  mutation($content: String!, $classId: ID!, $userId: ID!){
    CreatePost(data:{content: $content, classId: $classId,userId: $userId }){
      content
      User{
        id
        UserName
        role
      }
      Class{
        id
        ClassName
      }
      CreatedAt
      
    }
  }
`;

export const GetPosts = gql`
  
  query {
  Posts {
    id
    content
    img
    User {
      id
      UserName
      role
    }
    Class {
      id
      ClassName
    }
  }
}
`;
