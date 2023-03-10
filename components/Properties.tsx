import React from 'react'
import { motion } from "framer-motion"

const Properties = () => {
    return (
        <div>
            <div className=' container mx-auto w-full pt-[40px] '>
                <h2 className='text-[22px] leading-[33px] font-medium tracking-[0.02em] text-[#0E1133]'>Properties</h2>
                <div className='grid grid-cols-4 mt-[25px] gap-[24px]'>

                    <motion.div

                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}

                        className='cursor-pointer'>
                        <img src="/../assets/properties1.jpg" alt="" className='w-full h-auto' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Properties to <span className='font-bold'>Rent</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>12938 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/properties2.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Properties to <span className='font-bold'>Buy</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>165800 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 250
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/properties3.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>New  <span className='font-bold'>Apartments</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>1200 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 300
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        viewport={{ once: true }}
                        className='cursor-pointer'>
                        <img src="/../assets/properties4.jpg" alt="" className='w-full' />
                        <div>
                            <p className='text-[18px] leading-[27px] font-normal my-[12px]'>Flats for  <span className='font-bold'>Rent</span></p>
                            <div className='flex items-center'>
                                <p className='text-[14px] leading-[21px] font-normal w-[297px]'>184520 Verified Listings</p> <img src="/../assets/arrow_right_round.png" alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Properties