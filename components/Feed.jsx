'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map((prompt) => (
          <PromptCard
          key={prompt.id}
          post={post}
          handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}


const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // search states
  const [searchText, setSearchText] = useState('');
  
  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    if(!searchText){
      return;
    }

    const getResults = async () => {
      const response = await fetch(`/api/prompt/search?searchText=${searchText}`);
      const { data } = await response.json();
      console.log(data);
    }

    getResults();
  } , [searchText])





  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange = {handleSearchChange}
        required
        className='search_input peer'

        />
      </form>
      <PromptCardList
      data={[]}
      handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed