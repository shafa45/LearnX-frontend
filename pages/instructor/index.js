import axios from 'axios';
import InstructorRoute from '../../components/routes/instructorRoute';

const InstructorIndex = () => {
  return (
    <InstructorRoute>
      <h1 className='jumbotron text-center square'>Instructor Dashboard</h1>
    </InstructorRoute>
  );
};

export default InstructorIndex;
