const { gql } = require("@apollo/client");

export const GetNotesQuery = gql`
  query {
    Notes {
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
      }
      Block
      role
    }
  }
`;
