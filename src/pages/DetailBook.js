import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Layout from '../HOC/Layout';
import { useBook } from '../hooks/useBook';
import loadingIcon from '../assets/loadingIcon.gif';
const DetailBook = () => {
  const { id } = useParams();

  const { loading, error, data } = useBook(id);

  return (
    <Layout>
      <div className="container">
        <div className="w-full  flex justify-center">
          {loading ? (
            <div className="text-center mt-10">
              <img src={loadingIcon} alt="" />
            </div>
          ) : (
            <div className="w-5/6 mt-6">
              <p className="text-2xl font-medium mb-4 ml-12">
                {data?.book.name}
              </p>
              {/* body */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      className=" w-60 object-cover ml-auto h-90 rounded border border-gray-50"
                      src={
                        data?.book.cover
                          ? data?.book.cover
                          : 'https://picsum.photos/200/300'
                      }
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="mb-2">
                      <p>Author:</p>
                      <p className="font-semibold text-lg">
                        {data?.book.author.name}
                      </p>
                    </div>
                    <div className="mb-2">
                      <p>Category:</p>
                      <p className="font-semibold text-lg">
                        {data?.book.category.name}
                      </p>
                    </div>
                    <div className="mb-2">
                      <p>Rack Number:</p>
                      <p className="font-semibold text-lg">
                        {data?.book.rack.name}
                      </p>
                    </div>
                    <div className="mb-2">
                      <p>Code:</p>
                      <p className="font-semibold text-lg">{data?.book.code}</p>
                    </div>
                    <div className="mt-6">
                      {data?.book.status === 'BORROWED' ? (
                        <Button disabled>Orded Not Available</Button>
                      ) : (
                        <Button primary>Order Book</Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="font-semibold text-lg mb-2">Description</p>
                <p>
                  {data?.book.description} Far far away, behind the word
                  mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in
                  Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean. A small river named Duden flows by their place
                  and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly
                  into your mouth. Even the all-powerful Pointing has no control
                  about the blind texts it is an almost unorthographic life One
                  day however a small line of blind text by the name of Lorem
                  Ipsum decided to leave for the far World of Grammar. The Big
                  Oxmox advised her not to do so, because there were thousands
                  of bad Commas, wild Question Marks and devious Semikoli, but
                  the Little Blind Text didn’t listen. She packed her seven
                  versalia, put her initial into the belt and made herself on
                  the way. When she reached the first hills of the Italic
                  Mountains, she had a last view back on the skyline of her
                  hometown Bookmarksgrove, the headline of Alphabet Village and
                  the subline of her own road, the Line Lane.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DetailBook;
