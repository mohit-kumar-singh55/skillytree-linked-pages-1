import { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import SearchBox from '../../components/Layouts/Navbar/Searchbox'
import axios from 'axios'
import {
  baseUrlProfilePic,
  LanguageLevel,
  LANGUAGES,
  SUBJECTS,
  typesenseUrl,
} from '../../utils/constants'
import Link from 'next/link'
import Image from 'next/image'

const Tutors = () => {
  const [tutorData, setTutorData] = useState(null)
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    async function defaultFunc() {
      let res = await axios.get(typesenseUrl + 'tutor/search', {
        params: { q: searchText, page: page },
      })
      console.log(res, 'res')
      if (res && res.data && res.data.success) {
        console.log(res.data.data.hits, 'res.data.data.hits')
        setTutorData(res.data.data.hits)
        setTotalCount(res.data.data.out_of)
        setCount(res.data.data.found)
      }
    }
    defaultFunc()
  }, [searchText, page])

  return (
    <>
      <TutorsLists
    </>
  )
}

export default Tutors

