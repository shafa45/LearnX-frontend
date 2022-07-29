import { Card, Badge } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { currencyFormatter } from '../../utils/helpers';

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  console.log(course);

  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className='mb-4'
          cover={
            <img
              alt='example'
              src={image ? image.Location : '/course.png'}
              style={{ height: '300x', objectFit: 'cover' }}
              className='p-1'
            />
          }
        >
          <h2 className='font-weight-bold'>{name}</h2>
          <p>by {instructor.name}</p>
          <Badge
            count={category}
            style={{ backgroundColor: '#87d068' }}
            className='pb-2 mr-2'
          />
          <h4 className='pt-2'>
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: 'usd',
                })
              : 'Free'}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
