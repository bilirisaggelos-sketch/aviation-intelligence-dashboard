import asyncio
import os

from dotenv import load_dotenv
from telethon import TelegramClient
from telethon.network.connection.tcpfull import ConnectionTcpFull

load_dotenv()

API_ID = int(os.getenv("TELEGRAM_API_ID"))
API_HASH = os.getenv("TELEGRAM_API_HASH")

SESSION = "telegram_session"


async def main():

    print("Starting...")

    client = TelegramClient(
        SESSION,
        API_ID,
        API_HASH,
        connection=ConnectionTcpFull,
        use_ipv6=False
    )

    await client.connect()

    print("Connected!")

    print("Authorized:", await client.is_user_authorized())

    if not await client.is_user_authorized():

        phone = input("Phone: ")

        await client.send_code_request(phone)

        code = input("Code: ")

        await client.sign_in(phone, code)

    me = await client.get_me()

    print(me)

    await client.disconnect()


asyncio.run(main())